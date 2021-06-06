import {useState, useCallback} from 'react';

const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = useCallback((event: any) => {
        setValue(event.target.value);
    }, []);

    const clearValue = useCallback(() => {
        setValue('')
    }, [])
    return {
        value,
        onChange: handleChange,
        clearValue
    };
};
export default useInput