import React, { useEffect, useState } from 'react';
import { Button, Header, Icon, Modal, Popup } from 'semantic-ui-react';
import Copyable from 'react-copy-to-clipboard';
import styles from './styles.module.scss';

interface Props {
    cls: WebApi.Entity.Class;
    isOpened: boolean;
    setIsOpened: (isOpened: boolean) => void;
    onClose?: () => void;
}

const ClassKeysModal: React.FC<Props> = ({ cls, isOpened, setIsOpened, onClose }) => {
    const [copiedIndex, setCopiedIndex] = useState<0 | 1 | null>(null);

    useEffect(() => {
        if (copiedIndex !== null) {
            setTimeout(() => {
                setCopiedIndex(null);
            }, 1000);
        }
    }, [copiedIndex]);

    const close = () => {
        setIsOpened(false);

        if (onClose) {
            onClose();
        }
    };

    const onCopy = (index: 0 | 1) => () => {
        setCopiedIndex(index);
    };

    return (
        <Modal dimmer="inverted" open={isOpened}>
            <Modal.Header as="h1">Class created!</Modal.Header>
            <Modal.Content>
                <Header>There are class keys. Copy them necessarily!</Header>
                <h4>Teacher's key:</h4>
                <Popup
                    on={[]}
                    openOnTriggerMouseEnter
                    closeOnTriggerMouseLeave
                    content="Click to copy"
                    trigger={
                        <Copyable text={cls.join_key_teacher} onCopy={onCopy(0)}>
                            <Button className={styles.key} icon labelPosition="right">
                                {cls.join_key_teacher}
                                <Icon name={copiedIndex === 0 ? 'check circle outline' : 'copy'} />
                            </Button>
                        </Copyable>
                    }
                />
                <h4>Student's key:</h4>
                <Popup
                    on={[]}
                    openOnTriggerMouseEnter
                    closeOnTriggerMouseLeave
                    content="Click to copy"
                    trigger={
                        <Copyable text={cls.join_key} onCopy={onCopy(1)}>
                            <Button className={styles.key} icon labelPosition="right">
                                {cls.join_key}
                                <Icon name={copiedIndex === 1 ? 'check circle outline' : 'copy'} />
                            </Button>
                        </Copyable>
                    }
                />
            </Modal.Content>
            <Modal.Actions>
                <div className={styles.right}>
                    <Button primary onClick={close}>
                        Okay
                    </Button>
                </div>
            </Modal.Actions>
        </Modal>
    );
};

export default ClassKeysModal;
