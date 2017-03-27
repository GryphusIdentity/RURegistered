import React, { Component } from 'react';
import DataTables from 'material-ui-datatables';
import { connect } from 'react-redux'


const TABLE_COLUMNS = [
    {
        key: 'name',
        label: 'Dessert (100g serving)',
    }, {
        key: 'calories',
        label: 'Calories',
    }
];

const TABLE_DATA = [
    {
        name: 'Frozen yogurt',
        calories: '159',
        fat: '6.0',
        carbs: '24',
        protein: '4.0',
        sodium: '87',
        calcium: '14%',
        iron: '1%',
    }, {
        name: 'Ice cream sandwich',
        calories: '159',
        fat: '6.0',
        carbs: '24',
        protein: '4.0',
        sodium: '87',
        calcium: '14%',
        iron: '1%',
    }
];

const mapStateToProps = (state, ownProps) => {
    return {
        students: state.students
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (id) => dispatch({type : 'LOOKUP_STUDENT', id})
    }
}

class Table extends Component {
    constructor(props){
        super(props)
        
    }

    componentWillMount(){
        this.props.search(this.props.id)
    }

    render() {
        return (
            <DataTables
                height={'auto'}
                selectable={false}
                showRowHover={true}
                data={this.props.students}
                showCheckboxes={false}
                onCellClick={this.handleCellClick}
                onCellDoubleClick={this.handleCellDoubleClick}
                onFilterValueChange={this.handleFilterValueChange}
                onSortOrderChange={this.handleSortOrderChange}
                page={1}
                count={100}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)