interface Recipe {
  name: string;
  thumbnail_url: string;
  // Add other properties if needed
}
export function MainRecipe({ recipes }: { recipes: Recipe }) {
    return (
      <div>
        <svg
          className="absolute"
          style={{width: '700px'}}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 820 880"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M166.819 790.513C94.1523 717.128 -38.7811 512.225 10.8189 279.688C24.1523 210.317 79.2189 64.0063 192.819 33.7352C334.819 -4.10371 436.819 -17.8633 536.819 33.7352C552.696 41.9276 569.783 49.9899 587.368 58.287C680.538 102.248 787.677 152.799 802.819 264.208C816.504 364.899 804.177 615.633 685.321 698.641C698.62 709.895 710.144 722.534 718.911 737.101C733.683 761.645 741.426 790.171 733.48 817.533C732.854 819.689 732.131 821.811 731.334 823.902C730.621 830.835 729.301 837.778 727.34 844.683C726.576 847.371 724.839 849.219 722.676 850.339C717.041 857.923 709.368 864.297 700.305 868.957C673.083 882.956 640.492 882.538 610.843 875.182C596.778 871.694 583.16 867.363 569.566 863.041C548.682 856.399 527.855 849.777 505.557 846.254C474.203 841.302 430.427 836.232 384.901 830.958C324.171 823.923 260.326 816.528 218.696 808.572C194.908 804.026 179.009 797.881 168.835 790.189L166.819 790.513Z"
            fill="#F9E932"
          />
        </svg>
  
        <div className="m-6 ml-20 relative z-10" style={{width: '600px'}}>
            <div className="min-w-fit">
              <h3 className="text-xl font-bold mb">What We're Cooking</h3>
            </div>
            <div>
             <h1 className="text-5xl font-bold hover:text-red-600">{recipes.name}</h1>
            </div>
            <div>
             <img src={recipes.thumbnail_url} alt={recipes.name} />
            </div>
          
         
   
        </div>
      </div>
    );
  }
  