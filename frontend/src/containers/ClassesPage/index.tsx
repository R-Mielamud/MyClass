import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import ClassCard from '../../components/ClassCard';
import Spinner from '../../components/common/Spinner';
import { RootState } from '../../typings/rootState';
import CreateClassModal from '../CreateClassModal';
import JoinClassModal from '../JoinClassModal';
import styles from './styles.module.scss';

const ClassesPage: React.FC = () => {
    const { classes, classesLoaded } = useSelector((state: RootState) => state.class);

    if (!classesLoaded) {
        return <Spinner />;
    }

    return (
        <div>
            <div className={styles.buttons}>
                <JoinClassModal>
                    <Button>Join class</Button>
                </JoinClassModal>
                <CreateClassModal>
                    <Button primary>Create new class</Button>
                </CreateClassModal>
            </div>
            <div className={styles.container}>
                {classes.map((cls) => (
                    <div key={cls.id} className={styles.classWrapper}>
                        <ClassCard cls={cls} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClassesPage;
