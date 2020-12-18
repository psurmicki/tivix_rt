import React from 'react';
import { useForm } from "react-hook-form";
import {
  Input,
  InputGroup,
  InputGroupAddon,
  Button
} from 'reactstrap';
import '../styles/CitySearchForm.css';

const CitySearchForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className='CitySearchForm-Container'>
      <form
        id='City-Search-Form-Form'
        className='CitySearchForm-Form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputGroup>
          <Input
            id='CitySearchForm-Input-City'
            style={{ height: 'auto' }}
            name="city"
            placeholder="Enter a city name..."
            innerRef={register}
          />
          <InputGroupAddon addonType="append">
            <Button
              outline
              size='lg'
              id='CitySearchForm-Submit-Button'
              className='CitySearchForm-Button'
              color="success"
            >
              <i className="fas fa-search" />{' '}
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </form>
    </div>
  );
}

export default CitySearchForm;