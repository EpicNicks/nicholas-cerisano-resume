
import React, { Component } from 'react'
import ReactPDF, { PDFViewer, Document, Page } from '@react-pdf/renderer';
const resumePath = require('../../media/documents/Nicholas Cerisano Resume (February 2020).pdf');

const Resume = () => (
    <object data = '../../media/documents/Nicholas Cerisano Resume (February 2020).pdf'/>
);