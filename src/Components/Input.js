import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.input`
    border: 0;
    border: ${props => props.theme.boxBorder};
    border-radius: ${props => props.theme.borderRadius};
    background-color: ${props => props.theme.bgColor};
    height: 35px;
    font-size: 12px;
    padding: 0 15px;
`;

const Input = ({ placeholder, required = true }) => <Container placeholder={placeholder} required={required} />;

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool
};

export default Input;