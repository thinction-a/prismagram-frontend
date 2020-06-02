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

const Input = ({ placeholder, required = true, value, onChange, type="text" }) => (
    <Container 
        placeholder={placeholder} 
        required={required} 
        value={value} 
        onChange={onChange}
        type={type}
    />
);

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string
};

export default Input;