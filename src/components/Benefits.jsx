import React from "react";
import { Truck, RotateCcw, ShieldCheck, Award } from "lucide-react";

function Benefits() {
  return (
    <section className="benefits">
      <div className="benefit">
        <Truck size={28} />
        <div>
          <strong>Fast Delivery</strong>
          <small>Across India</small>
        </div>
      </div>

      <div className="benefit">
        <RotateCcw size={27} />
        <div>
          <strong>Easy Returns</strong>
          <small>7-day hassle-free returns</small>
        </div>
      </div>

      <div className="benefit">
        <ShieldCheck size={28} />
        <div>
          <strong>Secure Payments</strong>
          <small>100% secure checkout</small>
        </div>
      </div>

      <div className="benefit">
        <Award size={28} />
        <div>
          <strong>Quality Products</strong>
          <small>Made for little ones</small>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
