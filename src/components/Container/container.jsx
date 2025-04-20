import containerSL from './container.module.scss';

export const Container = ({children}) => <div className={containerSL.main_container}>{children}</div>