import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

export default class CompanyShowcase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: [],
        };
    }

    componentDidMount() {
        // Fetch company images from the backend server
        axios.get('http://localhost:8080/company/images')
            .then(response => {
                this.setState({ companies: response.data });
            })
            .catch(error => {
                console.error('Error fetching companies:', error);
            });
    }

    render() {
        return (
            <div>
                <h2>Company Showcase</h2>
                <Grid container spacing={2}>
                    {this.state.companies.map((company, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={`http://localhost:8080/backendImages/${company}`} // Assuming your image path is correct
                                    alt={`Company ${index + 1}`}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        Company {index + 1}
                                    </Typography>
                                    {/* You can add additional information about the company here */}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}
