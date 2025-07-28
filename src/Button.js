import React from 'react'

export default function Button({page,setPage}) {
  return (
    <div>
      <div className="pagination">
                <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} className='button1'>⬅ Prev</button>
                 <button onClick={() => setPage(prev => prev + 1)} className='button2'>Next ➡</button>
        </div>
    </div>
  )
}
