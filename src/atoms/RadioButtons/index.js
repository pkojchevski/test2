import React from 'react'

function RadioButtons() {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Questions</FormLabel>
            <RadioGroup name="question" value={value} onChange={handleChange}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
            </RadioGroup>
        </FormControl>
    )
}

export default RadioButtons
