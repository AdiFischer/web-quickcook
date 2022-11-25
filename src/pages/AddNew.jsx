import React, { useState } from 'react';
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
    const { TextArea } = Input;
    const [form] = Form.useForm()
    // const onFinish = (values) => {
    //     console.log(values);
    const onFinish = () => {
        console.log("success")
        message.success('Submit success!');
    };
    const onFinishFailed = () => {
        console.log("failed")
        message.error('Submit failed!');
    };

    return (
        <>
            <Form name='addNew'
                form={form}
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
                <Form.Item label="Name of Recipe" name="name" rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Servings" name={"servings"} rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Ready in (minutes)" name={"ready in"} rules={[
                    {
                        required: true,
                    },
                ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Ingredients" name={"ingredients"} rules={[
                    {
                        required: true,
                    },
                ]}>
                    <TextArea rows={16} />
                </Form.Item>
                <Form.Item label="Instructions" name="instructions" rules={[
                    {
                        required: true, message: "Instructions are required"
                    },
                ]}>
                    <TextArea rows={16} />
                </Form.Item>
                <Form.Item label="Type" name={"type"} rules={[
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
                <Form.Item label="Upload" valuePropName="fileList">
                    <Upload action="/upload.do" listType="picture-card">
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