import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Form,
    Input,
    Upload,
    Cascader,
    message
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function AddNew() {
    //const [image, setImage] = useState()

    function convertFile(file, obj) {
        if (file) {
            //const fileRef = file[0] || ""
            const fileType = file.type || ""
            const reader = new FileReader()
            reader.readAsBinaryString(file)
            reader.onload = (ev) => {
                // convert it to base64
                const obj1 = {...obj, image:`data:${fileType};base64,${window.btoa(ev.target.result)}`}
                console.log('hello', obj1)
                fetch(`${process.env.REACT_APP_ENDPOINT}/recipes`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(obj1),
                })
            }
        }
    }

    const navigate = useNavigate()
    const [form, setForm] = useState({})

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const { TextArea } = Input;

    const onFinish = (values) => {
        //console.log(values)
        const obj = {
            name: values.name,
            servings: values.servings,
            readyin: values.readyin,
            ingredients: values.ingredients,
            instructions: values.instructions,
            image: values.image,
            type: values.type[0]
        }
        // This is taking long... and image is not yet defined immediately below
        if(values?.image){
            convertFile(values?.image.file.originFileObj, obj)
        }else{
        fetch(`${process.env.REACT_APP_ENDPOINT}/recipes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        })
        message.success('Submit success!');
        navigate('/home')
    };}
    const onFinishFailed = () => {
        message.error('Submit failed!');
    };
    

    return (
        <>
            <Form name='addNew'
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                {/* <Form
                onFinish={onFinish}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
            > */}
                <Form.Item label="Name of Recipe" name="name" onChange={handleForm} rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Servings" name="servings" onChange={handleForm} rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Ready in (minutes)" name="readyin" onChange={handleForm} rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Ingredients" name="ingredients" onChange={handleForm} rules={[
                    {
                        required: true,
                    },
                ]}>
                    <TextArea rows={16} />
                </Form.Item>
                <Form.Item label="Instructions" name="instructions" onChange={handleForm} rules={[
                    {
                        required: true, message: "Instructions are required"
                    },
                ]}>
                    <TextArea rows={16} />
                </Form.Item>
                <Form.Item label="Type" name="type" onChange={handleForm} rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Cascader
                        options={[
                            { value: 'salads', label: 'Salads' },
                            { value: 'dairy', label: 'Dairy' },
                            { value: 'fish', label: 'Fish' },
                            { value: 'chicken', label: 'Chicken' },
                            { value: 'meat', label: 'Meat' },
                            { value: 'desserts', label: 'Desserts' },
                        ]}
                    />
                </Form.Item>
                <Form.Item name='image' label="Upload">
                    <Upload listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item label="Button">
                    <Button htmlType="submit">Submit</Button>
                </Form.Item>

            </Form>
        </>
    );

}