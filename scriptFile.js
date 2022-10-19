"use strict"
import jsondata from './data.json' assert {type: "json"}
let data = document.getElementById('fithere')
let tablebody = document.getElementById("mainbody");
let btn = document.getElementById('butto')

btn.addEventListener('click', (e) => {
    tablebody.innerHTML = ''
    filters(data.value)
})
function filters(status) {
    let output = jsondata.filter((option) => (option.status === status))
    output.forEach((obj) => (
        tablebody.innerHTML += `<tr>
            <td>${obj.capsule_serial}</td>
            <td>${obj.capsule_id}</td>
            <td>${obj.status}</td>
            <td>${obj.original_launch_unix}</td>
            <td>${obj.landings}</td>
            <td>${obj.type}</td>
            <td>${obj.details}</td>
            <td>${obj.reuse_count}</td>
           <td>${obj.missions.length}</td>
        </tr>`
    ))
}