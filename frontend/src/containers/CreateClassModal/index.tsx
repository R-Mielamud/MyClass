import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, InputOnChangeData, Modal, TextAreaProps } from 'semantic-ui-react';
import ClassKeysModal from '../../components/ClassKeysModal';
import { RootState } from '../../typings/rootState';
import { createClass, resetRecentlyCreated } from '../ClassesPage/logic/actions';
import styles from './styles.module.scss';

interface Props {
    children: JSX.Element;
}

const CreateClassModal: React.FC<Props> = ({ children }) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [isKeysModalOpened, setIsKeysModalOpened] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string | undefined>(undefined);
    const { recentlyCreatedClass } = useSelector((state: RootState) => state.class);
    const dispatch = useDispatch();

    useEffect(() => {
        if (recentlyCreatedClass) {
            setLoading(false);
            setIsKeysModalOpened(true);
        }
    }, [recentlyCreatedClass]);

    const buttonDisabled = !Boolean(name);

    const handleChangeName = (event: React.ChangeEvent, data: InputOnChangeData) => {
        if (data.value.length > 50) {
            return event.preventDefault();
        }

        setName(data.value);
    };

    const handleChangeDesc = (event: React.FormEvent<HTMLTextAreaElement>, data: TextAreaProps) => {
        if (data.value) {
            if (typeof data.value === 'number') {
                data.value = String(data.value);
            }

            if (data.value.length > 1000) {
                return event.preventDefault();
            }

            setDescription(data.value);
        }
    };

    const submit = (event: React.FormEvent) => {
        event.preventDefault();
        if (buttonDisabled) return;
        setLoading(true);
        setName('');
        setDescription(undefined);
        dispatch(createClass({ name, description }));
    };

    const closeKeysModal = () => {
        dispatch(resetRecentlyCreated());
        setIsOpened(false);
    };

    const resetStateAndClose = () => {
        setLoading(false);
        setName('');
        setDescription(undefined);
        setIsOpened(false);
    };

    return (
        <div>
            <Modal
                open={isOpened}
                onOpen={() => setIsOpened(true)}
                onClose={() => setIsOpened(false)}
                openOnTriggerClick
                trigger={children}
                as="form"
                dimmer="inverted"
                onSubmit={submit}
            >
                <Modal.Header>Create class</Modal.Header>
                <Modal.Content>
                    <Form as="div">
                        <Form.Field>
                            <label className="required">Name</label>
                            <Form.Input fluid placeholder="Name your class" value={name} onChange={handleChangeName} />
                        </Form.Field>
                        <Form.Field>
                            <label>Description</label>
                            <Form.TextArea
                                rows={10}
                                placeholder="Write a short article about your class"
                                value={description}
                                onChange={handleChangeDesc}
                            />
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <div className={styles.rightButtons}>
                        <Button onClick={resetStateAndClose} type="button">
                            Cancel
                        </Button>
                        <Button
                            primary
                            content="Create"
                            icon="check"
                            type="submit"
                            disabled={buttonDisabled}
                            loading={loading}
                        />
                    </div>
                </Modal.Actions>
            </Modal>
            {recentlyCreatedClass ? (
                <ClassKeysModal
                    cls={recentlyCreatedClass}
                    isOpened={isKeysModalOpened}
                    setIsOpened={setIsKeysModalOpened}
                    onClose={closeKeysModal}
                />
            ) : (
                ''
            )}
        </div>
    );
};

export default CreateClassModal;
