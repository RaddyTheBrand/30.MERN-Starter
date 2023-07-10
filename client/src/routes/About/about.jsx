import React from 'react'

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>Demo project showcasing the use of NodeJs, Express & MongoDB.</p>
      <p>That's pretty much it.</p>

      <table style={{width: "100%"}}>
        <thead>
          <tr>
            <th>ACTION</th>
            <th>URL</th>
            <th>HTTP</th>
            <th>BODY</th>
            <th>RESULT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{color: "blue"}}>READ</td>
            <td>/api/books</td>
            <td>GET</td>
            <td>Empty</td>
            <td>Returns ALL Books</td>
          </tr>
          <tr>
            <td style={{color: "blue"}}>READ</td>
            <td>/api/books/:id</td>
            <td>GET</td>
            <td>Empty</td>
            <td>Returns A Single Book</td>
          </tr>
          <tr>
            <td style={{color: "green"}}>CREATE</td>
            <td>/api/books</td>
            <td>POST</td>
            <td>JSON?</td>
            <td>New Book Created</td>
          </tr>
          <tr>
            <td style={{color: "orange"}}>UPDATE</td>
            <td>/api/books/:id</td>
            <td>PUT</td>
            <td>JSON?</td>
            <td>Updates Book</td>
          </tr>
          <tr>
            <td style={{color: "red"}}>DELETE</td>
            <td>/api/books/:id</td>
            <td>DELETE</td>
            <td>JSON</td>
            <td>Delete Book</td>
          </tr>
        </tbody>
      </table>


    </div>
  )
}

export default About