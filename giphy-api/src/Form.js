import React from 'react';


const Form = props => (<form onSubmit={props.getGiphy}>
    <input type="text" name="search" placeholder="Search" />
    <button>Get Giphy</button>
</form>
);

export default Form;