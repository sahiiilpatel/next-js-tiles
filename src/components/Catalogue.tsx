import React, { useState } from "react";

const Catalogue = () => {
    const [showContent, setShowContent] = useState(false);
    function handleDownload() {
        const pdfFilePath = "/assets/pdf/Catalogue_sample.pdf";

        const link = document.createElement("a");
        link.href = pdfFilePath;
        link.download = "Catalogue_sample.pdf";

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    }

    function toggleContent() {
        setShowContent(!showContent);
    }

    return (
        <>
            <div className="mb-3 w-screen flex justify-center items-center">
                <button className="tempcolor" onClick={toggleContent}>
                    {showContent ? "Show Less" : "Read More"}
                </button>
            </div>
            {
                showContent && (<div className="wrapper bg-[#00000010] p-5 mb-[20px]">
                    <div className="company-hover">
                        <div className="row gx-5">
                            <div className="col-md-8 d-flex align-items-center ">
                                <div className="text-wrapper">
                                    <h6 className="text-uppercase text-lg">
                                        DOWNLOAD LATEST COLLECTION’S CATALOGUE from Flowless
                                        International
                                    </h6>
                                    <p className="mt-4">
                                        Experience the unparalleled elegance and versatility of
                                        Flowless International&apos;s premium tile and stone
                                        collections by downloading our comprehensive catalogue today.
                                    </p>
                                    <div className="mt-[30px] tempcolor">
                                        <button onClick={handleDownload}>Download Catalogue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </>
    );
};

export default Catalogue;
