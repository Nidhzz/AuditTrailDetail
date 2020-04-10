import React, { Component } from "react";
import './AuditTrailDetails.css'
import {
    FormGroup,
    Col,
    Card,
    CardHeader,
    Row,
    CardBody,
    Button
} from "reactstrap";
import moment from "moment";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import data from '../data/data.json'

class AuditTrailDetails extends Component {
    constructor(props) {
        super(props);
        console.log("DATA ", data)
        this.state = {
            auditList: data.auditList
        }
    }


    formatStartDate = (cell, row) => {
        return cell ? moment(cell).format("DD/MM/YYYY,h:mm a") : "";
    }

    createCustomClearButton = (onClick) => {
        return (
            <Button
                onClick={e => this.handleClearButtonClick(onClick)} >Clear</Button>
        );

    }
    handleClearButtonClick = (onClick) => {
        console.log('This is my custom function for ClearSearchButton click event');
        onClick();
    }


    render() {
        const options = {
            sizePerPageList: [
                {
                    text: "25",
                    value: 20
                },
                {
                    text: "50",
                    value: 50
                },
                {
                    text: "100",
                    value: 100
                },
                {
                    text: "All",
                    value: this.state.auditList.length
                }
            ],
            sizePerPage: 25,
            clearSearch: true,
            clearSearchBtn: this.createCustomClearButton
        };
        return (
            <div>
                <br />
                <div className="animated fadeIn">
                    <Row className="row">
                        <Col xs="12" lg="12">
                            <Card className="card">
                                <CardHeader className="card-header">
                                    <FormGroup row className="marginBottomZero">
                                        <Col xs="12" md="4">
                                            <h1 className="regHeading paddingTop8">Audit Trail Details</h1>
                                        </Col>
                                    </FormGroup>
                                </CardHeader>
                                <CardBody className="card-body">
                                    <BootstrapTable
                                        trClassName="customClass"
                                        ref="table"
                                        data={this.state.auditList}
                                        pagination={true}
                                        options={options}
                                        hover={true}
                                        version="4"
                                        search={true}
                                        striped={true}
                                    >
                                        <TableHeaderColumn
                                            dataField="id"
                                            headerAlign="left"
                                            width="80"
                                            isKey
                                            dataSort={true}
                                            hidden
                                            searchable={false}
                                        >
                                            ID
                    </TableHeaderColumn>
                                        <TableHeaderColumn
                                            dataField="username"
                                            headerAlign="left"
                                            width="100"
                                            dataSort={true}
                                            searchable={false}
                                        >
                                            Username
                    </TableHeaderColumn>
                                        <TableHeaderColumn
                                            dataField="mobile"
                                            headerAlign="left"
                                            width="100"
                                            dataSort={true}
                                            searchable={true}
                                        >
                                            Mobile
                    </TableHeaderColumn>
                                        <TableHeaderColumn
                                            dataField="twoFactorStatus"
                                            headerAlign="left"
                                            width="100"
                                            dataSort={true}
                                            searchable={false}
                                        >
                                            2-Factor Status

                    </TableHeaderColumn>
                                        <TableHeaderColumn
                                            dataField="maker"
                                            headerAlign="left"
                                            width="100"
                                            dataSort={true}
                                            searchable={false}
                                        >
                                            Maker
                    </TableHeaderColumn>
                                        <TableHeaderColumn
                                            dataField="approvalStatus"
                                            headerAlign="left"
                                            width="100"
                                            dataSort={true}
                                            searchable={false}
                                            tdStyle={{ whiteSpace: "normal" }}
                                            thStyle={{ whiteSpace: 'normal' }}
                                        >
                                            Approval Status
                    </TableHeaderColumn>
                                        <TableHeaderColumn
                                            dataField="comments"
                                            headerAlign="left"
                                            width="100"
                                            dataSort={true}
                                            searchable={false}
                                            tdStyle={{ whiteSpace: "normal" }}
                                            thStyle={{ whiteSpace: 'normal' }}
                                        >
                                            Comments
                    </TableHeaderColumn>
                                        <TableHeaderColumn
                                            dataField="userStatus"
                                            headerAlign="left"
                                            width="100"
                                            dataSort={true}
                                            searchable={false}
                                        >
                                            User Status

                    </TableHeaderColumn>
                                        <TableHeaderColumn
                                            dataField="fullName"
                                            headerAlign="left"
                                            width="100"
                                            dataSort={true}
                                            searchable={false}
                                            tdStyle={{ whiteSpace: "normal" }}

                                        >
                                            Full Name

                    </TableHeaderColumn>
                                        <TableHeaderColumn
                                            dataField="dateTimeCreated"
                                            headerAlign="left"
                                            width="100"
                                            dataSort={true}
                                            searchable={false}
                                            dataFormat={this.formatStartDate}
                                        >
                                            Created At
                    </TableHeaderColumn>
                                        <TableHeaderColumn
                                            dataField="dateTimeModified"
                                            headerAlign="left"
                                            width="100"
                                            dataSort={true}
                                            searchable={false}
                                            dataFormat={this.formatStartDate}
                                        >
                                            Modified At

                    </TableHeaderColumn>
                                        <TableHeaderColumn
                                            dataField="actionType"
                                            headerAlign="left"
                                            width="100"
                                            dataSort={true}
                                            searchable={false}
                                        >
                                            Action Type
                    </TableHeaderColumn>
                                    </BootstrapTable>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
export default AuditTrailDetails