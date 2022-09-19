import React from "react"
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BpmCalculator from "./BpmCalculator";
import Link from "@material-ui/core/Link";
import {useTranslation} from "react-i18next";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
    panel: { width: "100%", maxWidth: 600, margin: "64px auto", },
}))

const ToolsPage = () => {
    const cn = useStyles()
    const {t} = useTranslation()

    const BestdoriChartChecker = () =>
        <Grid item container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">{t("Others")}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Link target="_blank" rel="noopener noreferrer" href="https://check.bestdori.sayobot.tech/">
                    { t("BestdoriChartCheck") }
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Link target="_blank" rel="noopener noreferrer" href="https://qq1010903229.github.io/BanGConverter">
                    { t("BanGConverter") }
                </Link>
            </Grid>
        </Grid>

    return (
        <Grid className={cn.panel} container direction="column" spacing={4}>
            <BpmCalculator />
            <BestdoriChartChecker />
        </Grid>)
}

export default ToolsPage
