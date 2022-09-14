import React from 'react'
// import {useContext} from 'react'
// import {RoomContext} from '../context';
import Title from '../components/Title';
//to get all unique value
const getUnique = (items,value) => {
return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({rooms}) {
    // const context = useContext(RoomContext);
    // const {
    // type ,capacity ,price
    // } = context;

    //get unique type
    // let types = getUnique(rooms,'type');
    //get all
    // types = ['all',...types];
    
    //map to js
    // types = types.map((item,index) => {
    // return <option value={item} key={index}>{item}</option>
    // });
    let people = getUnique(rooms,'capacity');
    people = people.map((item,index) => {
    return <option key={index} value={item}>{item}</option>
    })
    return (
        <div className="container mt-5">
            <Title title="AVAILABLE ROOMS" />
            
        </div>
    )
}