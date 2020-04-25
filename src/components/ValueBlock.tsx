import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import {Tooltip} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        fontFamily: "monospace",
        padding: theme.spacing(0),
        textAlign: 'center',
        borderRadius: 0,
    },
    m0: {
        margin: 0
    },
    hand: {
        cursor: "pointer"
    }
}));

interface ValueBlockProps {
    title: string;
    value: string;
    color?: string;
    fontSize?: string;
    tooltip?: string;
}

export function ValueBlock(props: ValueBlockProps) {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} style={({"background": props.color || "white"})}>
            <h3 className={classes.m0}
                style={({"fontSize": props.fontSize || "12px"})}
            >{props.title}</h3>
            {props.tooltip ? (<Tooltip className={classes.hand} title={props.tooltip}>
                <p className={classes.m0}>{props.value}</p>
            </Tooltip>) : (
                <p className={classes.m0}>{props.value}</p>
            )
            }


        </Paper>
    )
}
