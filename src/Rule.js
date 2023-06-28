const Rule = ( {rule, valid, active=true }) => {
    const hidden = valid || !active ? 'hidden' : '';    
    return (
        <div className={hidden}>
            <div>
                {rule}
            </div>
        </div>
    );
}

export default Rule;