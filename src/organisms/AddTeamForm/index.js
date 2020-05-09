import React from 'react'
import Input from '../../atoms/Input';
import ButtonSimple from '../../atoms/ButtonSimple';
import SelectAtom from '../../atoms/SelectAtom'
import {
    MenuItem
} from '@material-ui/core/MenuItem';

function addTeamForm() {

    const handleSubmit = () => {

    }

    const renderDivisionOptions = () => {
        // return this.state.DivisionData.map((dt, i) => {
        //     return (
        //         <MenuItem
        //             key={i}
        //             value={dt.divDeptShrtDesc}>
        //             {dt.divDeptShrtDesc}
        //         </MenuItem>
        //     );
        // });
    }

    const handleChangeDivision = (event) => {
        // this.setState({ DivisionState: event.target.value });
    }

    return (
        <form>
            <SelectAtom
                value={this.state.DivisionState}
                onChange={this.handleChangeDivision}
            >
                {this.renderDivisionOptions()}
            </SelectAtom>
            <SelectAtom
                value={this.state.DivisionState}
                onChange={this.handleChangeDivision}
            >
                {this.renderDivisionOptions()}
            </SelectAtom>
            <ButtonSimple type="submit" onClick={handleSubmit()} >Add Team Member</ButtonSimple>
        </form>
    )
}

export default addTeamForm
