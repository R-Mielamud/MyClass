import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Segment } from 'semantic-ui-react';
import styles from './styles.module.scss';

interface Props {
    cls: WebApi.Entity.Class;
    onlyAvatar?: boolean;
}

const ClassCard: React.FC<Props> = ({ cls, onlyAvatar }) => {
    const [mustRedirect, setMustRedirect] = useState<boolean>(false);

    const contents = cls.avatar ? (
        <img className={styles.inner} src={cls.avatar} alt="Class avatar" />
    ) : (
        <div style={{ backgroundColor: cls.color }} className={styles.inner}>
            <span className={styles.classKey} style={{ color: cls.text_color }}>
                {cls.key}
            </span>
        </div>
    );

    if (onlyAvatar) {
        return contents;
    }

    return (
        <Segment title={cls.name} className={styles.outer} onClick={() => setMustRedirect(true)}>
            {mustRedirect ? <Redirect to={`/class/${cls.id}`} /> : ''}
            {contents}
        </Segment>
    );
};

export default ClassCard;
