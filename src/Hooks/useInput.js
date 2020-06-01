import { useState } from "react";

export default (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    onChange = (e) => {
        const {
            target: { value }
        } = e;
    };

    return { value };
}