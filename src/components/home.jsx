import './css/style.css';
import Data from './data/tracks.json';
import { useState} from 'react';
import { motion } from 'framer-motion';

function Home(){
    
    const [isOpen,setOpen] = useState(false);
    const [isCard,setCard] = useState(null);
    const [isOption1,selOption1] = useState('option');
    const [isOption2,selOption2] = useState('option-selected');
    const [isOption3,selOption3] = useState('option');
    const [isUG,setUG] = useState('UG');
    
    
    
    

      
    
    
    return(
        
        <section className="container">
            
            <h1 className='center'>Welcome, Choose your Track</h1>
            <div className='selector center'>
            
                <div onClick={()=>{setUG('UG');selOption1('option');selOption2('option-selected');selOption3('option');}} className={isOption2}>
                    UG
                </div>
                <div onClick={()=>{setUG('PG');selOption1('option');selOption2('option');selOption3('option-selected')}} className={isOption3}>
                    PG
                </div>
                <div onClick={()=>{setUG('About');selOption1('option-selected');selOption2('option');selOption3('option')}} className={isOption1}>
                    About
                </div>
            </div>
            {
            isUG==='About'?
            (<div>
                <h2 className='subtitle' >{isUG}</h2>
                <p style={{textAlign:'justify'}}>Vidya is a crowd sourced academic initiative by students of UC College lead by the student organisation KSU. It aims to collect quality notes and other academic materials to make it available to the student community at large for exams and other academic pursuits, the team is being lead by <i>Aenosh K Santosh</i> a student of UC College Aluva. The idea of Vidya was perceived by <i>Joseph E George</i> and the initial Vidya app was launched in 2017. Special thanks to Arun Santhosh, Josemon all other contributers of Vidya. <i>PARUDEESA UNION</i> has been a very integral part of the current development contributing to the collection and collaboration of academic materials.    
                </p>

            </div>
            )
            :(
                
                <div>
                <h2 className='subtitle'>{isUG} Tracks</h2>
                <div className='grid'>
                {  
                    Data[isUG].map( (track,i) => {
                        return(
                            <motion.div
                            key={i}
                             onClick={() => {setOpen(!isOpen);setCard(track.track)}} className={'track-card grad-orange white-text ' + track.color} >
                                <motion.h3 >{track.track}</motion.h3>
                                Get Started
                                
                                {isOpen && track.track===isCard && (
                                    <div>
                                        <a href={track['Sem 1']}><motion.div className='sem center'> Sem 1 </motion.div></a>
                                        <a href={track['Sem 2']}><motion.div className='sem center'> Sem 2 </motion.div></a>
                                        <a href={track['Sem 3']}><motion.div className='sem center'> Sem 3 </motion.div></a>
                                        <a href={track['Sem 4']}><motion.div className='sem center'> Sem 4 </motion.div></a>
                                        {isUG==='UG' && (
                                        <div>
                                            <a href={track['Sem 5']}><motion.div className='sem center'> Sem 5 </motion.div></a>
                                            <a href={track['Sem 6']}><motion.div className='sem center'> Sem 6 </motion.div></a>
                                        </div>
                                        )}
                                        
                                        
                                    </div>
                                )
                                    
                                }
                                
                            </motion.div>
                            
                            
                        )
                    })
                    
                }
                <br />
                </div>
            </div> 
            
             )
         }  
        <div>
            <br />
            <br />
            <br />
            <br />
            <footer> &copy; Developed by Vidya Education Applications</footer>
        </div>
        </section>

    )
}

export default Home;