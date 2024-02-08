import React from 'react'
import './Update.css'
import { UpdatesData } from '../../Data/Data'

const Update = () => {
    return (
        <div className="Updates">
            {UpdatesData.map((update) => {
                return (
                    <div className="update">
                        <img src={update.img} alt="" srcset="" />
                        <div className="noti">
                            <div style={{ marginBottom: '0.5rem' }}>
                                <span style={{fontWeight:"bold"}}>{update.name}</span>
                                <span>&nbsp;{update.noti}</span>

                            </div>

                            <span>{update.time}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Update