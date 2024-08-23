import { Button, Modal } from 'antd';  // Ensure correct imports
import React, { useState } from 'react';

function Images({ imageSrc }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    }

    return (
        <div>
            <div onClick={showModal}>
                <img className="border-stone-900 border-2" src={imageSrc} alt="Image" />
            </div>
            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}>
                <img
                    src={imageSrc}
                    style={{ width: '50%' , height : '20%', margin : 'auto'}}
                />
            </Modal>
        </div>
    );
}

export default Images;
