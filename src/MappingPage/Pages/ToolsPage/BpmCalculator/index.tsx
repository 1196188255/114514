import React from "react"
import Grid from "@material-ui/core/Grid"
import NumberField from "../../../../Common/Components/NumberField"
import {useTranslation} from "react-i18next";
import Typography from "@material-ui/core/Typography";

const BpmCalculator = () => {
    const [bpm, setBpm] = React.useState(0)
    const [offset, setOffset] = React.useState(0)
    const [insert, setInsert] = React.useState("0.000")
    const [remove, setRemove] = React.useState("0.000")
    const updateResult = (bpm: number, offset: number) => {
        setBpm(bpm)
        setOffset(offset)
        const accurateFloat = (num: number, precision = 15) => parseFloat(num.toPrecision(precision))
        const beat = accurateFloat(bpm / 60 * offset)
        const secondPerBeat = accurateFloat(60 / bpm)
        const up = Math.ceil(beat)
        const down = Math.floor(beat)
        const upTime = accurateFloat(up * secondPerBeat)
        const downTime = accurateFloat(down * secondPerBeat)
        const insert = upTime - offset
        const remove = offset - downTime
        setInsert(isNaN(insert) ? "0.000" : insert.toFixed(3))
        setRemove(isNaN(remove) ? "0.000" : remove.toFixed(3))
    }

    const {t} = useTranslation()

    return (
        <Grid item container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">{t("BpmCalculator")}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="caption">{t("BpmCalcTip")}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <NumberField fullWidth number={bpm} onNumberChange={(e, v) => updateResult(v, offset)} label="BPM" />
            </Grid>
            <Grid item xs={12} md={6}>
                <NumberField fullWidth number={offset} onNumberChange={(e, v) => updateResult(bpm, v)} label="Offset" />
            </Grid>
            <Grid item xs={12}>
                { t("BpmCalcResult", { insert, remove }) }
            </Grid>
        </Grid>
    )
}

export default BpmCalculator
