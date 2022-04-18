import React from "react";

const Blog = () => {
  return (
    <div className="text-start mx-4 ">
      <h1 className="p-4 mt-5">Blog</h1>
      <p className="text-info">
        Q1 :Difference between `authorization` and `authentication`
      </p>
      <p>
        {" "}
        Answer : Authentication is a process for varifing someome <br></br>
        Where as Authorization is a process for varifing someone`s access to
        cirtain file , link ,data or other permition.
      </p>
      <p className="text-info mt-4">
        Q1 :Why are you using `firebase`? What other options do you have to
        implement authentication?
      </p>
      <p>
        {" "}
        Answer : In this course firebaese is used for Authentication <br></br>
        There are some other option for authentication :<br></br>
      </p>
      <ol>
        <li>Passport JS</li>
        <li>AuthO</li>
        <li>Permit</li>
        <li>Grant</li>
        <li>Feather </li>
      </ol>
      <p className="text-info mt-4">
        Q1 : What other services does `firebase` provide other than
        authentication
      </p>
      <p>
        {" "}
        Answer : Firebase also provide Realtime Databse ,Hostiong , Storage .
      </p>
    </div>
  );
};

export default Blog;
