import React from 'react'

function sorting() {
    function NewToOld(e){
        
    }

    function OldToNew(e){
        
    }
    function Paid(e){
        
    }
    function NotPaid(e){

    }

    return (
        <div>
            <div className="sorting">
                <ul>
                    <li>
                        <button onClick={(e)=>{NewToOld(e)}}>Newest to Oldest</button>
                    </li>
                    <li>
                        <button onClick={(e) => { OldToNew(e)}}> Oldest to Newest</button>
                    </li>
                    <li>
                        <button onClick={(e) => { Paid(e)}}> Sort by Purchased</button>
                    </li>
                    <li>
                        <button onClick={(e) => { NotPaid(e)}}>Sort by Not Purchased</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default sorting
