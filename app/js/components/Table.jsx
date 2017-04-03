import React, { Component } from 'react';
import DataTables from 'material-ui-datatables';
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students
  }
}

const columns = [
  { label: 'Student Name', key: 'displayName', sortable: true },
  { label: 'Student Number', key: 'uid' },
  { key: 'mail', label: 'Student Email Address' }
]

class Table extends Component {

  render() {
    return (
      <DataTables
        height={'auto'}
        selectable={false}
        showRowHover={true}
        columns={columns}
        data={this.props.students}
        showCheckboxes={false}
        onCellClick={this.handleCellClick}
        onCellDoubleClick={this.handleCellDoubleClick}
        onFilterValueChange={this.handleFilterValueChange}
        onSortOrderChange={this.handleSortOrderChange}
        page={1}
        count={100}
      />
    )
  }
}

export default connect(mapStateToProps)(Table)
