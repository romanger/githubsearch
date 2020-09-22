import React, {useContext, useEffect} from 'react';
import {GithubContext} from "../context/github/githubContext";
import {Link} from "react-router-dom";
import {Repos} from "../components/Repos";

export const Profile = ({match}) => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
    const urlName = match.params.name;

    useEffect(() => {
        getUser(urlName);
        getRepos(urlName);
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <p className='text-center'>Loading ...</p>;
    }

    const {
        name, company, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists
    } = user;
    return (
        <>
            <Link to="/" className='btn btn-link'>Go home</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3">
                            <img className='img-fluid' src={avatar_url} alt={name}/>
                            <h1 className="h4 mt-2">{name}</h1>
                            {location && <p>Location: {location}</p>}
                            <a href={html_url} className='btn btn-dark'>Open profile</a>
                        </div>
                        <div className="col">
                            {
                                bio && <div>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </div>
                            }

                            <ul className='list-group list-group-flush'>
                                {
                                    login &&
                                    <li className='list-group-item pl-0'><strong>Username: </strong>{login}</li>
                                }
                                {
                                    company &&
                                    <li className='list-group-item pl-0'><strong>Company: </strong>{company}</li>
                                }
                                {
                                    blog &&
                                    <li className='list-group-item pl-0'><a href={blog} className="card-link">Website</a></li>
                                }
                            </ul>
                            <div className="badge badge-primary mr-2">
                                Followers: {followers}
                            </div>
                            <div className="badge badge-success mr-2">
                                Follows: {following}
                            </div>
                            <div className="badge badge-info mr-2">
                                Repositories: {public_repos}
                            </div>
                            <div className="badge badge-dark">
                                Gists: {public_gists}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos}/>
        </>
    )
};


