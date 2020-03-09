import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Stats() {
    return (
        <Paper className={["p-3"]}>
        <Typography variant="h6" gutterBottom>Stats?</Typography>
            <form noValidate autoComplete="off">
                <TextField id="user" label="User" variant="outlined" />
                <TextField id="repository" label="Repository" variant="outlined" />
                <Button variant="contained" color="primary">
                    Set
                </Button>
            </form>
    </Paper>
    );
}