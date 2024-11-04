'use client'

import PerosonalUser from "./personaluser";

// for component the user is a component bcz it is like a thing that it can define seprately and call easily by only mention it name

type Usertype = {
    name: string;
};

// we can simply write the props for calling but we Deconstructing props and defining the type for props so it can easily called
export default function User({ name }: Usertype) {


    return (
        <>
        <h1>This is User Component</h1>
        {/* <PerosonalUser /> */}
        {PerosonalUser()}
        <div>
            <h2>UserName is {name}</h2>

        </div>
        </>
    );
}
