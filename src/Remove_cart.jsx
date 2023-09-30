

export function Remove_Cart({setlist,list,removeItem,btnState}) {

  return (
    <div > 
      
  {list.map((data,index)=>  <div key={index}  className='small_container'>
    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
    <div className='content1'><h2  className='content1'>{data.name}</h2>
    <p className='content1'>{data.rating}</p>    
    <p className='content1'>{data.price}</p>
   </div>
    <div className='button'><button id="btns" value={data.id} className="remove_btn" onClick={(e) =>{removeItem(index,data)} }>Remove</button></div>
  </div>)}

      </div>

  );
}
