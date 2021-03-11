import React, { useState } from 'react'

const Inputs =() =>{
    const [list, setList] = useState('');
    const [todo, setTodo] = useState([]);

    
    function handleSubmit(e) {
        e.preventDefault();
        if(list){
            const item = {id: new Date().getTime().toString(),list};
            setTodo((todo) => {
                return[...todo, item];
            });
            setList('');
            console.log('list');
        }else{
            console.log('empty list');
        }
    }
    const doneList = (id) => {
        let newList = todo.filter((item) => item.id !==id);
        setTodo(newList);
    }
    return(
        <div className='inputs'>
            <form action="" className="form" onSubmit={handleSubmit}>
                <input
                type='text'
                name='list'
                id='list'
                placeholder='Add Your list...'
                value={list}
                onChange={(e) => setList(e.target.value)}
                />
                <button type="submit">Add List</button>
            </form>
            <div className='lists' >
                <h1>To-do Lists Till Today</h1>
                <button onClick={() => setTodo([])}>Ckear Lists</button>
                <div className="items">
                    {
                        todo.map((item) =>{
                            const{ id, list} = item;
                            return(
                                <div key={ id } className='item'>
                                    <h2>{ list }</h2>
                                    <button 
                                    onClick={() => doneList(id)}>
                                    Clear
                                    </button>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Inputs;