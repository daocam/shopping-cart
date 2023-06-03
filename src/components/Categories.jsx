import "../styles/Categories.css"

const Categories = ({setActiveCategory, categories, activeCategory}) => {

    return (
        <div className="thg-categories" >
            <select
                className="thg-categories-select"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
            >
                <option value="">tous types</option>
                {categories.map((cat) => (
                    <option key={cat}>{cat}</option>
                ))}
            </select>
            <button onClick={() => setActiveCategory("")} className="thg-categories-button">Réinitialiser</button>
        </div>
        
    )
}

export default Categories