export default function HobbyList() {
    let pageTitle = "Hobby List";
    let hobby1 = "https://www.goodreads.com/";
    let hobby2 = "https://www.amazon.com/music/unlimited/?ref_=dmm_acq_mrn_d_br_xmA_z_6FVQ2BuP-c_c_677358597304_g_104333615228";
 
    return (
      
       <div>
       <h3 className="hobbyHeading">{pageTitle}</h3>
       <p className="hobbyText">
       <a href={hobby1}  > Good Reads</a>
       </p>
        <p className="hobbyText">
       <a href={hobby2}  > Amazon Music</a> 
      </p>
       </div>     
    );
 }