// import React from 'react'
import React from 'react'
// import { FaRegBookmark} from 'react-icons/fa';

const ItemCard = (props) => {
    // const navigate = useNavigate()
    // const navigatetoJobDetails = () => {
    //     navigate('/job-details', { state: { jobProps: props } }); 
    //   };
      
    // const navigatetoTagsPage = () => {
    //     navigate('/tags'); 
    //   };
        
   const uniqueColors = props.color.length > 0 ? [...new Set(props.color)] : ['Black'];
   const uniqueSizes = props.size.length > 0 ? [...new Set(props.size)] : ['No Size'];
   

    const customClassName = props.work_type;
      return (
        <div className='jobList'>
          <div key={props.id} className={`${customClassName} jobCard`} >
            <div className='jobCard__content'>
              <div className='jobCard__header' >
                <img src={props.image} alt='job-img' className='jobImage' />
              </div>

              <div className="jobCard__footer">


                <h3 className='jobName' id ='product-price'>{props.price}</h3>
                <h3 className='jobName '>{props.job_title}</h3>
              <div className='displayStack__1'> 
              {/* <span className='available-text'>Available Colors</span> */}
                <div className='tagsContainer'>
                  {uniqueColors.map((tag, index) => (
                    <span key={index} className='tagItem' >{tag}</span>
                  ))}
                </div>
              {/* <span className='available-text'>Available Sizes</span> */}
                <div className='tagsContainer'>
                {uniqueSizes.map((tag, index) => (
                    <span key={index} className='tagItem' >{tag}</span>
                  ))}
                </div>
              
              
                <div className='tagsContainer'>
                  {props.tag1 && <div className='tagItem'>{props.tag1}</div>}
                  {props.tag2 && <div className='tagItem'>{props.tag2}</div>}
                  {props.tag3 && <div className='tagItem'>{props.tag3}</div>}
                </div>
              </div>

                {/* <div className='displayStack__2'>
                  <div className='jobview' >{props.tag1}</div>
                  <div className='jobview' >{props.tag2}</div>
                  <div className='jobview' >{props.tag3}</div>
                </div> */}
              </div>


            </div>
          </div>
        </div>
      );
}

export default ItemCard





