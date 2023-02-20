import './index.css';
import React, { useState, useEffect } from 'react';

function Menu() {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        setTimeout(async () => {
            if (category.length === 0) {
                let data = await fetch("https://services-ten.vercel.app/menu");
                let dataJson = await data.json();
                setCategory(dataJson.data.list[0])
            }
        }, 100);
    }, [category]);

    return (
        <nav className="menu">
            {Object.keys(category).map((cate, i) => (
                <div className='menu-inner-container' key={i}>
                    <a key={i} href={"#" + cate}>
                        {
                            (cate === "card_list")
                                ? <div className="category" >Lista de tarjetas</div>

                                : (cate === "pays_transfer")
                                    ? <div className="category" >Transferencias y pagos</div>

                                    : (cate === "support")
                                        ? <div className="category" >Atención al cliente</div>

                                        : (cate === "enterprises")
                                            ? <div className="category" >Empresas</div>
                                            : <div className="category" >{cate}</div>
                        }
                    </a>
                    <div className='sub-category-container'>
                        <div className='sub-category-sub-container'>
                            {
                                (category[cate]?.length !== 0)
                                    ? Object.keys(category[cate][0]).map((subcate, j) => (
                                        <div className="sub-category" key={j}>
                                            <a href={"#" + subcate}>
                                                {(subcate === "between_cards")
                                                    ? "Entre tarjetas"
                                                    : (subcate === "banks")
                                                        ? "Cuenta bancaria"
                                                        : (subcate === "credit_card")
                                                            ? "Tarjetas de crédito"
                                                            : (subcate === "lock")
                                                                ? "Bloqueos"
                                                                : (subcate === "change_pass")
                                                                    ? "Cambio de contraseña"
                                                                    : subcate
                                                }
                                            </a>
                                            <div className='sub-sub-category-container'>
                                                <div className='sub-sub-category-sub-container'>
                                                    {
                                                        (category[cate][0][subcate]?.length !== 0)
                                                            ? Object.keys(category[cate][0][subcate][0]).map((subsubcate, j) => (
                                                                <div className="sub-sub-category" key={j}>
                                                                    <a href={"#" + subsubcate}>
                                                                        {
                                                                            (subsubcate === "master_card") ? 
                                                                            "Master Card":
                                                                            
                                                                            (subsubcate === "visa") ? 
                                                                            "Visa": {subsubcate}
                                                                        }
                                                                    </a>
                                                                </div>
                                                            ))
                                                            : ""
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    : ""
                            }
                        </div>
                    </div>
                </div>
            ))}
        </nav>
    );
}

export default Menu;
