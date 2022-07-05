import React, { FC } from "react";
import Button from "../common/Button";
import "./Call.css";

const Call: FC = () => {
  return (
    <section className='section section_bg'>
      <div className='container'>
        <div className='call'>
          <div className='call-content'>
            <h2>Call our store and takeaway when it suits you best.</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500.
            </p>
            <Button>Ph. +61 233 2333</Button>
          </div>
          <div className='call-content'>
            <img
              src='https://assets.website-files.com/5e865e09d8efa3310676b585/5eb0bcb8036072a55de52baf_Food%20Takeaway.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Call;
