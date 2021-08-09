import React from 'react'

function sorting() {
    function NewToOld(e){
        console.log('hello')
    }
    function OldToNew(e){
        console.log('hello')
    }
    function Paid(e){
        console.log('hello')
    }
    function NotPaid(e){
        console.log('hello')
    }

    return (
        <div>
            <div className="sorting">
                <ul>
                    <li>
                        <button onClick={(e)=>{NewToOld(e)}}>Newest to Oldest</button>
                        {/* <button
                            func={() => this.sortByDate("desc")}
                            buttonName="Sort by Date - Newest to oldest" /> */}
                    </li>
                    <li>
                        <button onClick={(e) => { OldToNew(e) }}> Oldest to Newest</button>
                        {/* <button
                            func={() => this.sortByDate("ascending")}
                            buttonName="Sort by Date - Oldest to newest" /> */}
                    </li>
                    <li>
                        <button onClick={(e) => { Paid(e) }}> Sort by Purchased</button>
                        {/* <button
                            func={() => this.sortByPurchased("true")}
                            buttonName="Sort by Purchased" /> */}
                    </li>
                    <li>
                        <button onClick={(e) => { NotPaid(e) }}>Sort by Not Purchased</button>
                            {/* // func={() => this.sortByPurchased("false")}
                            // buttonName="Sort by Not Purchased" 
                             */}

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default sorting
