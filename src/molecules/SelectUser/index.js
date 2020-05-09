import React, { Fragment } from 'react'
import Label from '../../atoms/Label'
import SelectAtom from '../../atoms/SelectAtom'
import {
    MenuItem
} from '@material-ui/core/MenuItem';
function index() {

    const renderDivisionOptions = () => {
        return this.state.DivisionData.map((dt, i) => {
            return (
                <MenuItem
                    key={i}
                    value={dt.divDeptShrtDesc}>
                    {dt.divDeptShrtDesc}
                </MenuItem>
            );
        });
    }

    const handleChangeDivision = (event) => {
        this.setState({ DivisionState: event.target.value });
    }

    return (
        <SelectAtom
            value={this.state.DivisionState}
            onChange={this.handleChangeDivision}
        >
            {this.renderDivisionOptions()}
        </SelectAtom>
    )

}

export default index
