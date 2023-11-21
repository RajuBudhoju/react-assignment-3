import { Fragment } from "react";
import Input from "../UI/Input";


const InputForm = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center",height: "35vh"}}>
        <div style={{border: "2px solid #333",padding: "20px",maxWidth: "500px",width: "100%",height: "130%", boxSizing: "border-box"}}>
        <form>
            <h1>Input Form</h1>
            <Input
                label='Item name'
                input={{
                id: 'amount_',
                type: 'text'
            }}
            />
            <Input
                label='Description'
                input={{
                id: 'amount_',
                type: 'text'
            }}
            />
            <Input
                label='Size'
                input={{
                id: 'amount_',
                type: 'text'
            }}
            />
            <Input
                label='Quantity'
                input={{
                id: 'amount_',
                type: 'text'
            }}
            />
        </form>
        </div>
        </div>
    );
};

export default InputForm;