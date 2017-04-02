import React, { Component } from 'react';
import DataTables from 'material-ui-datatables';
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students
  }
}

class Table extends Component {

  render() {
    return (
      <DataTables
        height={'auto'}
        selectable={false}
        showRowHover={true}
        columns={[{key: 'displayName', label: 'Name'}]}
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
