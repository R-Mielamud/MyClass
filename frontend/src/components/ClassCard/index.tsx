import React from 'react';
import { Segment } from 'semantic-ui-react';
import styles from './styles.module.scss';

interface Props {
    cls: WebApi.Entity.Class;
}

const ClassCard: React.FC<Props> = ({ cls }) => {
    return (
        <Segment title={cls.name} className={styles.outer}>
            {cls.avatar ? (
                <img className={styles.inner} src={cls.avatar} alt="Class avatar" />
            ) : (
                <div style={{ backgroundColor: cls.color }} className={styles.inner}>
                    <span className={styles.classKey} style={{ color: cls.text_color }}>
                        {cls.key}
                    </span>
                </div>
            )}
        </Segment>
    );
};

export default ClassCard;
