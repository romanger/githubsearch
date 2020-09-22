import React, {useContext, useState} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {GithubContext} from "../context/github/githubContext";

export const Search = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const github = useContext(GithubContext);

    const onSubmit = (evt) => {
        if (evt.key !== 'Enter') {
            return;
        }

        github.clearUsers();

        if (value.trim()) {
            github.search(value.trim());
            alert.hide();
        } else {
            alert.show('Please enter search term!');
        }
    };
    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Please enter users nickname..."
                onKeyPress={onSubmit}
                value={value}
                onChange={evt => setValue(evt.target.value)}
            />
        </div>
    );
};
