import React from "react";
import Page from "../common/Page";
import Button from "../common/Button";
import Grow from "../common/Grow";
import {useHistory} from 'react-router-dom';
import classes from './ReportScreen.module.css';
import Horizontal from "../common/Horizontal";


const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];


function formatDdMmmYyyyHhMmSs(date) {
    const append = (n) => n <= 9 ? `0${n}` : n.toString();
    return `${append(date.getDate())}-${months[date.getMonth() + 1]}-${date.getFullYear()} ${append(date.getHours())}:${append(date.getMinutes())}`
}

function getComments(score) {
    if (score < 70) {
        return 'Nice Try'
    }
    if (score < 80) {
        return 'Terrific'
    }
    if (score < 90) {
        return 'Fantastic'
    }
    if (score < 100) {
        return 'Fabulous'
    }
    if (score === 100) {
        return 'Spectacular'
    }
}


function getBadgeColor(score) {
    if (score < 70) {
        return 'rgba(122,41,123,0.8)';
    }
    if (score < 80) {
        return 'rgba(41,100,123,0.8)';
    }
    if (score < 90) {
        return 'rgba(122,123,41,0.8)';
    }
    if (score < 100) {
        return 'rgba(181,182,47,0.8)';
    }
    if (score === 100) {
        return 'rgba(208,162,30,0.8)';
    }
}

export default function ReportScreen({session}) {
    const history = useHistory();
    const score = (session.answers.filter(s => s.isCorrect).length / session.answers.length) * 100;

    return <Page>
        <Horizontal verticalAlign={'bottom'}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>Report</div>
            <Grow/>
            <span>
            <div style={{
                fontSize: '5rem',
                border: `3px dashed ${getBadgeColor(score)}`,
                borderRadius: 150,
                width: 150,
                height: 150,
                textAlign: 'center',
                paddingTop: 13,
                color: getBadgeColor(score),
                boxShadow: `inset 0px 0px 80px 10px ${getBadgeColor(score)}`,
                margin: 10
            }}>
                {score.toFixed(0)}
            </div>
                <div style={{textAlign: 'center', fontSize: '1.5rem', marginBottom: '1rem'}}>
                {getComments(score)} !!
                </div>
                </span>
            <Grow/>
            <div style={{
                fontSize: '1.5rem',
                marginBottom: '1rem'
            }}>{formatDdMmmYyyyHhMmSs(new Date(session.startAt))}</div>
        </Horizontal>
        <div>
            <table className={classes.table}>
                <thead>
                <tr>
                    <td style={{textAlign: 'center'}}>No</td>
                    <td style={{width: '100%', textAlign: 'right', padding: 5}}>Question</td>
                    <td>Total</td>
                    <td>Answer</td>
                    <td style={{whiteSpace: 'nowrap'}}>Time (Seconds)</td>
                </tr>
                </thead>
                <tbody>
                {session.questions.map((question, index) => {
                    const {timeTakenInMs, answer, expected, isCorrect} = session.answers[index];
                    return <tr data-isCorrect={isCorrect}>
                        <td style={{textAlign: 'center'}}>{index + 1}</td>
                        <td style={{textAlign: 'right'}}>{question.join(', ')}</td>
                        <td style={{textAlign: 'center'}}>{expected}</td>
                        <td style={{textAlign: 'center'}}>{answer}</td>
                        <td style={{
                            textAlign: 'center',
                            whiteSpace: 'nowrap'
                        }}>{`${((timeTakenInMs) / 1000).toFixed(2)}`}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
        <Page.Actions>
            <Grow/>
            <Button onClick={() => history.push('/')}>Home</Button>
        </Page.Actions>
    </Page>
}
